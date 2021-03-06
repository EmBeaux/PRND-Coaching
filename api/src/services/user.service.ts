import User from "../models/user.model"
import serviceHelper from "./service.helper";
import { Request, Response } from 'express';
import { generateSessionToken } from './helpers/session.helper'
import bcrypt from "bcrypt";
import passport from "passport";

export default {
  ...serviceHelper(User, 'user'),
  login(req: Request, res: Response, next) {
    passport.authenticate('local', (err, user, info) => {
      if (err) { return next(err); } //error exception

      // user will be set to false, if not authenticated
      if (!user) {
          res.status(401).json({
            success: false,
            message: info,
          })
      } else {
          req['login'](user, err => {
            res.send({
              success: true,
              message: "Login successful",
              token: req["session"].passport.user
            })
          })
      }    
    })(req, res, next);
  },
  signup(req: Request, res: Response) {
    const { name, email, password, password2 } = req.body;
    let errors = [];
    if(!name || !email || !password || !password2) {
        errors.push({ msg : "Please fill in all fields" })
    }
    //check if match
    if(password !== password2) {
        errors.push({ msg : "passwords dont match" });
    }

    //check if password is more than 6 characters
    if(password.length < 6 ) {
        errors.push({ msg : 'password at least 6 characters' })
    }

    if(errors.length > 0 ) {
      res.send({
        success: false,
        message: errors
      })
      return;
    } else {
      //validation passed
      User.findOne({ email : email }).exec((err,user)=>{
        if(user) {
          res.send({
            success: false,
            message: ["Email already taken."]
          })
        } else {
          const newUser = new User({
              email : email,
              password : password
          });

          bcrypt.genSalt(10, (err, salt) => {
            // @ts-expect-error
            bcrypt.hash(newUser.password ,salt, (err,hash)=> {
              if(err) {
                res.send({
                  success: false,
                  messages: [err]
                })
              } else {
                // @ts-expect-error
                newUser.password = hash;
                newUser.save().then((value) => {
                  res.send({
                    success: true,
                    messages: ["User saved successfully!"]
                  })
                })
              }
            })
          });
        }
     })
    }
  },
  logout(req: Request, res: Response) {
    req["logout"]();
    res.send({
      success: true,
      message: "Logout successful"
    })
  },
  async currentUser(req: Request, res: Response) {
    let user;
    if (req.headers.authorization) {
      let token = req.headers.authorization
      if (token && token.includes("Bearer ")) {
        token = req.headers.authorization.split("Bearer ")[1]
      }
      user = await User.findOne({ _id: token }).select({ fullName: 1, email: 1, isAdmin: 1 })
    } else {
      user = null
    }
    res.send({ success: !!user, user })
  }
}