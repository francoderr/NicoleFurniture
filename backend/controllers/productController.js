import ProductModel from "../models/Product.js";


export const createProduct = async (req, res) => {
    let title = req.body.title;
    let description = req.body.description;
    let image = req.body.image;
    let price = req.body.price;

    if (!title) {
        return res.status(400).json({
            Status: "Failed",
            message: "Title is required!",
        });
    }

    if (!description) {
        return res.status(400).json({
            Status: "Failed",
            message: "Description is required!",
        });
    }

    if (!image) {
        return res.status(400).json({
            Status: "Failed",
            message: "Image is required!",
        });
    }

    if (!price) {
        return res.status(400).json({
            Status: "Failed",
            message: "Price is required!",
        });
    }

    try {
        const newProduct = new ProductModel({
            title,
            description,
            image,
            price,
        });

        await newProduct.save();
        res.status(200).json({
            Status: "Success",
            message: "Product created successfully!",
            product: newProduct,
        });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const editProduct = async (req, res) => {
    let productId = req.body.productId;
    let title = req.body.title;
    let description = req.body.description;
    let image = req.body.image;
    let price = req.body.price;

    if (!productId) {
        return res.status(400).json({
            Status: "Failed",
            message: "Product ID is required!",
        });
    }

    if (!title && !description && !image && !price) {
        return res.status(400).json({
            Status: "Failed",
            message: "At least one field (title, description, image, price) is required for update!",
        });
    }

    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(
            productId,
            { title, description, image, price },
            { new: true, runValidators: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({
                Status: "Failed",
                message: "Product not found!",
            });
        }

        res.status(200).json({
            Status: "Success",
            message: "Product updated successfully!",
            product: updatedProduct,
        });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};


export const listProducts = async (req, res) => {
    try {
        const products = await ProductModel.find({});
        res.status(200).json({
            Status: "Success",
            message: "Products retrieved successfully!",
            products: products,
        });
    } catch (error) {
        res.status(500).json({
            Status: "Failed",
            message: error.message,
        });
    }
};
