const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

// Get all workouts
const getAllWorkouts = async (req, res) => {
	const workouts = await Workout.find({}).sort({ createdDate: -1 }); // to be more specific ({reps:20})
	try {
		res.status(200).json(workouts);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Get single workout
const getWorkout = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'No such workout' });
	}
	const workout = await Workout.findById(id);

	if (!workout) {
		return res.status(404).json({ error: 'No such workout' });
	}

	res.status(200).json(workout);
};

// Create a workout
const creatWorkout = async (req, res) => {
	const { title, load, reps } = req.body;

	// write record to db
	try {
		const workout = await Workout.create({ title, load, reps });
		res.status(200).json(workout);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Place a workout
const updateWorkout = async (req, res) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'No such workout' });
	}

	const workout = await Workout.findOneAndUpdate(
		{ _id: id },
		{ ...req.body }
	);

	if (!workout) {
		return res.status(404).json({ error: 'No such workout' });
	}

	res.status(200).json(workout);
};

// Delete a workout
const deleteWorkout = async (req, res) => {
	const { id, title, load, reps } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'No such workout' });
	}

	const workout = await Workout.findByIdAndDelete({ _id: id });

	if (!workout) {
		return res.status(404).json({ error: 'No such workout' });
	}

	res.status(200).json(workout);
};

module.exports = {
	getAllWorkouts,
	getWorkout,
	creatWorkout,
	updateWorkout,
	deleteWorkout,
};
