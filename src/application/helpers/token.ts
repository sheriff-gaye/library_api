
import jwt from 'jsonwebtoken';

export class TokenService {
  private static readonly secret = 'your_secret_key';

  static generateToken(payload: any): string {
    return jwt.sign(payload, this.secret, { expiresIn: '1h' });
  }

  static verifyToken(token: string) {
    try {
      const tokenWithoutPrefix = token.replace('Bearer ', '');
      return jwt.verify(tokenWithoutPrefix, this.secret);
    } catch (error) {
      console.error('Token verification error:', error);
      throw new Error('Invalid token');
    }
  }
}
