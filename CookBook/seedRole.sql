IF NOT EXISTS (SELECT 1 FROM dbo.Role)
BEGIN
    INSERT INTO dbo.Role (nom_role) VALUES ('Admin');
    INSERT INTO dbo.Role (nom_role) VALUES ('Utilisateur');
END