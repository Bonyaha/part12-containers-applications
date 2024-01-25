const express = require('express')
const { getAsync } = require('../redis')
const router = express.Router()

/* GET statistics. */
router.get('/', async (_, res) => {
	const addedTodos = await getAsync('added_todos')
	res.json({
		added_todos: Number(addedTodos) || 0
	})
})

module.exports = router
