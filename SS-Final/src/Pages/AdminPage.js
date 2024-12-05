import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

const AdminPage = () => {
    const [courses, setCourses] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        difficulty: "",
        whatYouLearn: "",
        image: null,
    });
    const [editModalData, setEditModalData] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);

    // Fetch courses on component mount
    useEffect(() => {
        fetchCourses();
    }, []);

    // Fetch all courses from the backend
    const fetchCourses = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/api/courses");
            setCourses(data);
        } catch (error) {
            console.error("Error fetching courses:", error.response?.data || error.message);
        }
    };

    // Handle input changes (for form fields and file input)
    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image") {
            setFormData({ ...formData, image: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // Add a new course
    const handleAddCourse = async () => {
        try {
            const token = localStorage.getItem("token");
            if (
                !formData.name ||
                !formData.description ||
                !formData.price ||
                !formData.category ||
                !formData.difficulty ||
                !formData.whatYouLearn ||
                !formData.image
            ) {
                alert("Please fill all fields, including uploading an image.");
                return;
            }

            const formDataToSend = new FormData();
            formDataToSend.append("name", formData.name);
            formDataToSend.append("description", formData.description);
            formDataToSend.append("price", formData.price);
            formDataToSend.append("category", formData.category);
            formDataToSend.append("difficulty", formData.difficulty);
            formDataToSend.append("whatYouLearn", JSON.stringify(formData.whatYouLearn.split("\n")));
            formDataToSend.append("image", formData.image);

            await axios.post("http://localhost:5000/api/courses", formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            });

            fetchCourses();
            setFormData({
                name: "",
                description: "",
                price: "",
                category: "",
                difficulty: "",
                whatYouLearn: "",
                image: null,
            });

            document.getElementById("image").value = "";
            alert("Course added successfully!");
        } catch (error) {
            console.error("Error adding course:", error.response?.data || error.message);
        }
    };

    // Delete a course
    const handleDeleteCourse = async (id) => {
        try {
            const token = localStorage.getItem("token");
            await axios.delete(`http://localhost:5000/api/courses/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            fetchCourses();
            alert("Course deleted successfully!");
        } catch (error) {
            console.error("Error deleting course:", error.response?.data || error.message);
        }
    };

    // Open edit modal with course data
    const handleEditCourse = (course) => {
        setEditModalData({
            ...course,
            whatYouLearn: course.whatYouLearn.join("\n"),
            newImage: null,
        });
        setShowEditModal(true);
    };

    // Handle input changes in the edit modal
    const handleEditModalChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "newImage") {
            setEditModalData({ ...editModalData, newImage: files[0] });
        } else {
            setEditModalData({ ...editModalData, [name]: value });
        }
    };

    // Update an existing course
    const handleUpdateCourse = async () => {
        try {
            const token = localStorage.getItem("token");
            const formDataToSend = new FormData();
            formDataToSend.append("name", editModalData.name);
            formDataToSend.append("description", editModalData.description);
            formDataToSend.append("price", editModalData.price);
            formDataToSend.append("category", editModalData.category);
            formDataToSend.append("difficulty", editModalData.difficulty);
            formDataToSend.append("whatYouLearn", JSON.stringify(editModalData.whatYouLearn.split("\n")));

            if (editModalData.newImage) {
                formDataToSend.append("image", editModalData.newImage);
            }

            await axios.put(
                `http://localhost:5000/api/courses/${editModalData._id}`,
                formDataToSend,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setShowEditModal(false);
            fetchCourses();
            alert("Course updated successfully!");
        } catch (error) {
            console.error("Error updating course:", error.response?.data || error.message);
        }
    };

    // Check if edit modal data has changed
    const isEditModalChanged = () => {
        const originalCourse = courses.find((c) => c._id === editModalData?._id);
        if (!originalCourse) return false;

        const originalData = {
            ...originalCourse,
            whatYouLearn: originalCourse.whatYouLearn.join("\n"),
            newImage: null,
        };

        return JSON.stringify(originalData) !== JSON.stringify(editModalData);
    };

    return (
        <div className="container py-5">
            <h1 className="text-center mb-5" style={{ color: "#6a1b9a", fontFamily: "Playfair Display" }}>
                Admin - Manage Courses
            </h1>

            {/* Add New Course Section */}
            <div className="mb-5 p-4 rounded shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
                <h2 className="mb-4">Add New Course</h2>
                <div className="row g-3">
                    {[
                        { name: "name", label: "Course Name", value: formData.name },
                        { name: "category", label: "Category", value: formData.category },
                        { name: "description", label: "Description", value: formData.description },
                        { name: "price", label: "Price", value: formData.price },
                        { name: "difficulty", label: "Difficulty", value: formData.difficulty },
                    ].map(({ name, label, value }) => (
                        <div key={name} className="col-md-6">
                            <label className="form-label">{label}</label>
                            <input
                                type="text"
                                className="form-control"
                                name={name}
                                value={value}
                                onChange={handleInputChange}
                            />
                        </div>
                    ))}
                    <div className="col-12">
                        <label className="form-label">What You'll Learn</label>
                        <textarea
                            className="form-control"
                            name="whatYouLearn"
                            value={formData.whatYouLearn}
                            onChange={handleInputChange}
                            rows="4"
                        ></textarea>
                    </div>
                    <div className="col-12">
                        <label htmlFor="image" className="form-label">Upload Image</label>
                        <input type="file" className="form-control" name="image" id="image" onChange={handleInputChange} />
                        {formData.image && (
                            <p className="mt-2 text-muted">Selected file: {formData.image.name}</p>
                        )}
                    </div>
                </div>
                <button className="btn btn-primary w-100 mt-3" onClick={handleAddCourse}>
                    Add Course
                </button>
            </div>

            {/* Existing Courses */}
            <h2 className="mb-4">Existing Courses</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => (
                        <tr key={course._id}>
                            <td>{course.name}</td>
                            <td>{course.category}</td>
                            <td>${course.price}</td>
                            <td>
                                <button
                                    className="btn btn-warning me-2"
                                    onClick={() => handleEditCourse(course)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDeleteCourse(course._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Edit Modal */}
            {editModalData && (
                <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Course</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row g-3">
                            {[
                                { name: "name", label: "Course Name", value: editModalData.name },
                                { name: "category", label: "Category", value: editModalData.category },
                                { name: "description", label: "Description", value: editModalData.description },
                                { name: "price", label: "Price", value: editModalData.price },
                                { name: "difficulty", label: "Difficulty", value: editModalData.difficulty },
                            ].map(({ name, label, value }) => (
                                <div key={name} className="col-md-6">
                                    <label className="form-label">{label}</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name={name}
                                        value={value}
                                        onChange={handleEditModalChange}
                                    />
                                </div>
                            ))}
                            <div className="col-12">
                                <label className="form-label">What You'll Learn</label>
                                <textarea
                                    className="form-control"
                                    name="whatYouLearn"
                                    value={editModalData.whatYouLearn}
                                    onChange={handleEditModalChange}
                                    rows="4"
                                ></textarea>
                            </div>
                            <div className="col-12">
                                <label htmlFor="newImage" className="form-label">Upload New Image</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="newImage"
                                    id="newImage"
                                    onChange={handleEditModalChange}
                                />
                                {editModalData.newImage && (
                                    <p className="mt-2 text-muted">Selected file: {editModalData.newImage.name}</p>
                                )}
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleUpdateCourse} disabled={!isEditModalChanged()}>
                            Update Course
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
};

export default AdminPage;
