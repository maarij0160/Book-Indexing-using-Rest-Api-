import { Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { createParamDecorator, ExecutionContext } from '@nestjs/common';



@Controller('auth')
export class AuthController{

    constructor(private authSerive:AuthService){}

    @Post('signup')

    signup(){
        return 'I am signed up'
    }

    @Post('signin')

    signin(){
        return 'I am signed in'
    }






}