import { HashComparer } from '../../../data/protocols/criptography/hash-comparer'
import bcrypt from 'bcrypt'

export class BcryptAdapter implements HashComparer {
  async compare (plainText: string, digest: string): Promise<boolean> {
    const isValid = await bcrypt.compare(plainText, digest)
    if (isValid) {
      return true
    }
    return false
  }
}
