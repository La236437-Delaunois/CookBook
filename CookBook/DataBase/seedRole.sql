IF NOT EXISTS (SELECT 1 FROM dbo.Role)
BEGIN
    DBCC CHECKIDENT('dbo.Role', RESEED, 0);
    INSERT INTO dbo.Role (nom_role) VALUES ('Admin');
    INSERT INTO dbo.Role (nom_role) VALUES ('Utilisateur');
END