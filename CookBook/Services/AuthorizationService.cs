using CookBook.Models;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace CookBook.Services
{
    public class AuthorizationService
    {
        // à ne surtout pas faire ! (Utilisation de variable d'environnement, fichier local non versionné, Vault...)
        private string privateKey = "b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\r\nQyNTUxOQAAACBAAHuj4EY5BCrJoIbne/CYhXWH4YWKYa/qszDMqa/v/QAAAJhsq4IObKuC\r\nDgAAAAtzc2gtZWQyNTUxOQAAACBAAHuj4EY5BCrJoIbne/CYhXWH4YWKYa/qszDMqa/v/Q\r\nAAAEBspyNsIv6CezOEUbcDXN3W6Wp6OcukwhnFfoTXNyXHA0AAe6PgRjkEKsmghud78JiF\r\ndYfhhYphr+qzMMypr+/9AAAADmJickBiYnItdWJ1bnR1AQIDBAUGBw==";

        public string CreateToken(Utilisateur user)
        {
            //instancie un gestionnaire capable de créer et lire des JWT
            var handler = new JwtSecurityTokenHandler();

            //convertir la clé en UTF8
            var privateKeyUTF8 = Encoding.UTF8.GetBytes(privateKey);

            //définit l'algorithme de signature et la clé privée
            var credentials = new SigningCredentials(new SymmetricSecurityKey(privateKeyUTF8),
                                                      SecurityAlgorithms.HmacSha256);

            //définit le contenu du token
            var tokenDescription = new SecurityTokenDescriptor
            {
                SigningCredentials = credentials, //signature du token
                Expires = DateTime.UtcNow.AddMinutes(5), //temps avant expiration
                Subject = GenerateClaims(user) //contenu du token (claims)
            };

            var token = handler.CreateToken(tokenDescription); //crée le token grâce à la description qu'on a crée juste avant

            return handler.WriteToken(token); //retourne le token sous format String
        }

        //Génère les claims (informations) à insérer dans le token
        private ClaimsIdentity GenerateClaims(Utilisateur user)
        {
            var Claims = new ClaimsIdentity(); //crée une nouvelle identité vide

            Claims.AddClaim(new Claim(ClaimTypes.Name, user.Pseudo)); //obligatoire 
            Claims.AddClaim(new Claim(ClaimTypes.Email, user.Email)); //obligatoire
            Claims.AddClaim(new Claim("id", user.Id.ToString())); //claim personnalisé
            Claims.AddClaim(new Claim(ClaimTypes.Role, user.Role.nom_role));
            


            return Claims;
        }

        //Vérifie si le token est valide et si l'utilisateur a le rôle requis (si spécifié)
        public bool IsTokenValid(string token, string role)
        {
            //nettoie le token (en cas de "Bearer <token>")
            token = token.Replace("Bearer", "").Trim();

            //instancie un gestionnaire capable de lire le JWT
            var handler = new JwtSecurityTokenHandler();

            //définit les paramètres de validation du token
            var param = new TokenValidationParameters();
            param.ValidateIssuer = false;
            param.ValidateAudience = false;
            param.ValidateLifetime = true;
            param.IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(privateKey));

            SecurityToken securityToken;
            try
            {
                var claims = handler.ValidateToken(token, param, out securityToken);

                if (role != null)
                {
                    return claims.IsInRole(role);
                }
                else
                {
                    return true;
                }
            }
            catch (Exception e)
            {
                return false;
            }
        }
    }
}
