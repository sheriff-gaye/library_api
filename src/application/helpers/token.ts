
import jwt from 'jsonwebtoken';

export class TokenService {
  private static readonly secret = 'your_secret_key';

  static generateToken(payload: any): string {
    return jwt.sign(payload, this.secret, { expiresIn: '1h' });
  }

  static verifyToken(token: string): any {
    try {
      return jwt.verify(token, this.secret);
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}
