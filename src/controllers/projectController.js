import Project from '../models/Project';

// Displays List of all Projects in Database
exports.getProjects = async (req, res) => {
    const projects = await Project.find({})
    res.status(200).json(projects)
}

// Displays details for a specific Project
exports.getProjectById = async (req, res) => {
    const { _id } = req.query
    try {
        const project = await Project.findOne({ _id })
        res.status(200).json(project)
    } catch (error) {
        console.error(error)
    }
}

// Create a new Project in the Database
exports.createProject = async (req, res) => {
    const { name, status, summary } = req.body
    try {
        if (!name || !status || !summary) {
            return res.status(422).send('Project is missing one or more fields')
        }
        const project = await new Project({
            name,
            status,
            summary
        }).save()
        res.status(201).json(project)
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error creating project')
    }
}

// Delete a Project by it's ID
exports.deleteProject = async (req, res) => {
    const { _id } = req.query;
    try {
        await Project.findOneAndDelete({ _id })
        res.status(200).json({})
    } catch (error) {
        console.error(error)
    }
}