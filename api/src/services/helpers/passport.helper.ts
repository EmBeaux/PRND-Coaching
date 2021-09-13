import passportLocal from 'passport-local';
import bcrypt from 'bcrypt';
import User from '../../models/user.model'

const LocalStrategy = passportLocal.Strategy;

export default function(passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email' },(email, password, done)=> {
            //match user
            User.findOne({email : email})
                .then((user)=>{
                    if(!user) {
                        return done(null, false, { message : 'Incorrect Email or Password' });
                    }
                    //match pass
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if(err) throw err;

                        if(isMatch) {
                            return done(null, user);
                        } else {
                            return done(null, false, { message: 'Incorrect Email or Password' });
                        }
                    })
                })
                .catch((err)=> {console.log(err)})
        })
        
    )
    passport.serializeUser((user, done) => {
        done(null, user.id)
    })
    passport.deserializeUser((id, done) => {
        let user = User.findOne({ _id: id })
      
        done(null, user)
    })
}; 