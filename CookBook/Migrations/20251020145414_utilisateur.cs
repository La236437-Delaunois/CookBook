using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CookBook.Migrations
{
    /// <inheritdoc />
    public partial class utilisateur : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Categorie",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nom_categorie = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categorie", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Ingredient",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nom_ingredient = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ingredient", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Recette",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    titre_recette = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    description_recette = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    photo_recette = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    utilisateurId = table.Column<int>(type: "int", nullable: false),
                    CategorieId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Recette", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Recette_Categorie_CategorieId",
                        column: x => x.CategorieId,
                        principalTable: "Categorie",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Recette_Utilisateur_utilisateurId",
                        column: x => x.utilisateurId,
                        principalTable: "Utilisateur",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Etapes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    titre_etape = table.Column<int>(type: "int", nullable: false),
                    description_etape = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Id_recette = table.Column<int>(type: "int", nullable: false),
                    RecetteId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Etapes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Etapes_Recette_RecetteId",
                        column: x => x.RecetteId,
                        principalTable: "Recette",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RecetteIngredients",
                columns: table => new
                {
                    recetteId = table.Column<int>(type: "int", nullable: false),
                    ingredientId = table.Column<int>(type: "int", nullable: false),
                    quantite = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RecetteIngredients", x => new { x.recetteId, x.ingredientId });
                    table.ForeignKey(
                        name: "FK_RecetteIngredients_Ingredient_ingredientId",
                        column: x => x.ingredientId,
                        principalTable: "Ingredient",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RecetteIngredients_Recette_recetteId",
                        column: x => x.recetteId,
                        principalTable: "Recette",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RecetteUtilisateur",
                columns: table => new
                {
                    RecettesFavorisId = table.Column<int>(type: "int", nullable: false),
                    utilisateursFavorisId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RecetteUtilisateur", x => new { x.RecettesFavorisId, x.utilisateursFavorisId });
                    table.ForeignKey(
                        name: "FK_RecetteUtilisateur_Recette_RecettesFavorisId",
                        column: x => x.RecettesFavorisId,
                        principalTable: "Recette",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RecetteUtilisateur_Utilisateur_utilisateursFavorisId",
                        column: x => x.utilisateursFavorisId,
                        principalTable: "Utilisateur",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Etapes_RecetteId",
                table: "Etapes",
                column: "RecetteId");

            migrationBuilder.CreateIndex(
                name: "IX_Recette_CategorieId",
                table: "Recette",
                column: "CategorieId");

            migrationBuilder.CreateIndex(
                name: "IX_Recette_utilisateurId",
                table: "Recette",
                column: "utilisateurId");

            migrationBuilder.CreateIndex(
                name: "IX_RecetteIngredients_ingredientId",
                table: "RecetteIngredients",
                column: "ingredientId");

            migrationBuilder.CreateIndex(
                name: "IX_RecetteUtilisateur_utilisateursFavorisId",
                table: "RecetteUtilisateur",
                column: "utilisateursFavorisId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Etapes");

            migrationBuilder.DropTable(
                name: "RecetteIngredients");

            migrationBuilder.DropTable(
                name: "RecetteUtilisateur");

            migrationBuilder.DropTable(
                name: "Ingredient");

            migrationBuilder.DropTable(
                name: "Recette");

            migrationBuilder.DropTable(
                name: "Categorie");
        }
    }
}
