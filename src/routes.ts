import {Request, Response} from 'express';
import CreateCourseService from './CreateCourseService';


export function createCourse(request: Request, response: Response){

        CreateCourseService.execute({name:"NodeJS", duration:10, educator:"D4k37"});

        return response.send();

}