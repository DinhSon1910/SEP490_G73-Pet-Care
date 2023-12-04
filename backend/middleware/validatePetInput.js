const { body, validationResult } = require('express-validator')

const validateCreatePet = [
    body('userId').trim().notEmpty().withMessage('Không nhận được ID người dùng'),
    body('petName').trim().notEmpty().withMessage('Vui lòng nhập tên thú cưng')
        .matches(/^[\p{L}\s]+$/u).withMessage('Tên sản phẩm không chứa ký tự đặc biệt'),
    body('categoryId').trim().notEmpty().withMessage('Vui lòng chọn loại thú cưng'),
    body('color').optional().isString().withMessage('Màu lông không hợp lệ'),
    body('height').optional().isFloat().withMessage('Chiều cao phải là một số'),
    body('weight').optional().isFloat().withMessage('Cân nặng phải là một số'),
    body('rank').optional().isInt().withMessage('Cấp thú cưng phải là 0, 1, 2 , 3'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array()[0].msg })
        } else return next();
    }
]

const validateUpdatePet = [
    body('id').trim().notEmpty().withMessage('Không nhận được ID của thú cưng'),
    body('userId').trim().notEmpty().withMessage('Không nhận được ID người dùng'),
    body('petName').trim().notEmpty().withMessage('Vui lòng nhập tên thú cưng')
        .matches(/^[\p{L}\s]+$/u).withMessage('Tên thú cưng không chứa ký tự đặc biệt'),
    body('categoryId').trim().notEmpty().withMessage('Vui lòng chọn loại thú cưng'),
    body('color').optional().isString().withMessage('Màu lông không hợp lệ'),
    body('height').optional().isFloat().withMessage('Chiều cao phải là một số'),
    body('weight').optional().isFloat().withMessage('Cân nặng phải là một số'),
    body('rank').optional().isInt().withMessage('Cấp thú cưng phải là 0, 1, 2 , 3'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array()[0].msg })
        } else return next();
    }
]

module.exports = {
    validateCreatePet,
    validateUpdatePet,
}