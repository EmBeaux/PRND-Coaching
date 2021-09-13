import crypto from "crypto"

export const generateSessionToken = () => {
    return crypto.randomBytes(16).toString('base64');
};