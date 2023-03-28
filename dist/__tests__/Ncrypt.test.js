"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ncrypt_1 = __importDefault(require("../ncrypt"));
describe('Ncrypt', () => {
    const key = '12345678901234567890123456789012'; // 32 characters
    describe('constructor', () => {
        it('should create a buffer from the key', () => {
            const ncrypt = new ncrypt_1.default(key);
            expect(ncrypt.buffer).toBeInstanceOf(Buffer);
            expect(ncrypt.buffer).toHaveLength(32);
        });
        it('should throw an error if key length is not 32', () => {
            expect(() => new ncrypt_1.default('1234')).toThrowError('Invalid key length. Must be 32 characters.');
        });
    });
    describe('encrypt and decrypt', () => {
        it('should encrypt and decrypt plaintext', () => {
            const ncrypt = new ncrypt_1.default(key);
            const plaintext = 'Hello, world!';
            const ciphertext = ncrypt.encrypt(plaintext);
            const decrypted = ncrypt.decrypt(ciphertext);
            expect(decrypted).toEqual(plaintext);
        });
        it('should throw an error if ciphertext is invalid', () => {
            const ncrypt = new ncrypt_1.default(key);
            const invalidCiphertext = 'invalid:ciphertext';
            expect(() => ncrypt.decrypt(invalidCiphertext)).toThrowError();
        });
    });
});
//# sourceMappingURL=Ncrypt.test.js.map