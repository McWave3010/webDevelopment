"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Picture = (req, res) => {
    const pic = req.cookies.pic;
    if (!pic) {
        return res.status(404).json({ message: "No picture found" });
    }
    else {
        return res.status(200).json({ picture: pic });
    }
};
exports.default = Picture;
