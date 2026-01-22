if (process.env.NODE_ENV === 'production') {
    module.exports = require('../dist/index.cjs');
} else {
    // Fallback or development behavior if needed
    module.exports = (req, res) => {
        res.status(200).json({ message: 'API ready' });
    };
}
