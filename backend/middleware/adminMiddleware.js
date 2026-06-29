const adminOnly = (req, res, next) => {
  if (req.user.role !== "Admin") {
    return res.status(403).json({
      success: false,
      message: "Access Denied. Admin Only",
    });
  }

  next();
};

export default adminOnly;