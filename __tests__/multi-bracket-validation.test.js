'use strict';

const multiBracketValidation = require('../multiBracketValidation/multi-bracket-validation');

describe('multiBracketValidation function', () => {
    it('should return true on one pair of brackets', () => {
        // Arrange
        const testString = '{}';
        // Act
        const result = multiBracketValidation(testString);
        // Assert
        expect(result).toBe(true);
    })

    it('should return true on three pair of brackets', () => {
        // Arrange
        const testString = '{}(){}';
        // Act
        const result = multiBracketValidation(testString);
        // Assert
        expect(result).toBe(true);
    })

    it('should return true on nested brackets with text inside', () => {
        // Arrange
        const testString = '()[[Extra Characters]]';
        // Act
        const result = multiBracketValidation(testString);
        // Assert
        expect(result).toBe(true);
    })

    it('should return true on nested brackets without text inside', () => {
        // Arrange
        const testString = '(){}[[]]';
        // Act
        const result = multiBracketValidation(testString);
        // Assert
        expect(result).toBe(true);
    })

    it('should return true on nested brackets and multi text inside', () => {
        // Arrange
        const testString = '{}{Code}[Fellows](())';
        // Act
        const result = multiBracketValidation(testString);
        // Assert
        expect(result).toBe(true);
    })

    it('should return false on missing round closing bracket', () => {
        // Arrange
        const testString = '[({}]';
        // Act
        const result = multiBracketValidation(testString);
        // Assert
        expect(result).toBe(false);
    })

    it('should return false on missing square open bracket', () => {
        // Arrange
        const testString = '(](';
        // Act
        const result = multiBracketValidation(testString);
        // Assert
        expect(result).toBe(false);
    })

    it('should return false on mixing brackets', () => {
        // Arrange
        const testString = '{(})';
        // Act
        const result = multiBracketValidation(testString);
        // Assert
        expect(result).toBe(false);
    })

    it('should return false on one open bracket', () => {
        // Arrange
        const testString = '{';
        // Act
        const result = multiBracketValidation(testString);
        // Assert
        expect(result).toBe(false);
    })

    it('should return false on one closing bracket', () => {
        // Arrange
        const testString = ')';
        // Act
        const result = multiBracketValidation(testString);
        // Assert
        expect(result).toBe(false);
    })

    it('should return false on not matching brackets', () => {
        // Arrange
        const testString = '[}';
        // Act
        const result = multiBracketValidation(testString);
        // Assert
        expect(result).toBe(false);
    })
})