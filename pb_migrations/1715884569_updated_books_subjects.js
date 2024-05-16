/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bf6ilunhc538qjn")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_j7NI76y` ON `books_subjects` (`subject`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bf6ilunhc538qjn")

  collection.indexes = []

  return dao.saveCollection(collection)
})