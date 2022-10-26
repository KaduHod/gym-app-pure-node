import { test, expect } from 'vitest'
import { Personal, PersonalInterface } from '../../app/Models/Personal.model';
import { User } from '../../app/Models/User.model';
import path from 'path'
console.log(path.basename(__filename))

test('create one Personal', () => {
    const personal = new Personal({
        id:1,
        user_id:1
    })
    expect(personal).toBeInstanceOf(Personal)
})

test('should be linked with user', async () => {
    
})

