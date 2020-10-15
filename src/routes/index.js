import express from 'express';

import projectController from '../controllers/projectController';

const router = express.Router();

// PROJECT ROUTES

// Get all Projects in the Database
router.get('/api/projects', projectController.getProjects);

// Get a Project by ID
router.get('/api/project', projectController.getProjectById);

// Create a Project
router.post('/api/project', projectController.createProject);

// Delete a Project by ID
router.delete('/api/project', projectController.deleteProject);

module.exports = router;