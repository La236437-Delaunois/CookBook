IF NOT EXISTS (SELECT 1 FROM dbo.Categorie)
BEGIN
    -- Réinitialise l'auto-incrément de la table (pour recommencer à 1)
    DBCC CHECKIDENT('dbo.Categorie', RESEED, 0);

    -- Insère les 4 catégories de base
    INSERT INTO dbo.Categorie (nom_categorie) VALUES ('Entrée');
    INSERT INTO dbo.Categorie (nom_categorie) VALUES ('Plat');
    INSERT INTO dbo.Categorie (nom_categorie) VALUES ('Dessert');
    INSERT INTO dbo.Categorie (nom_categorie) VALUES ('Boisson');
END