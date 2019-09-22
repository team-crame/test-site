import { Exercise_1 } from '../pages/Exercise_1';
import { Exercise_2 } from '../pages/Exercise_2';
import { Tutorial } from '../pages/Tutorial';

export const pages = [
    {
        component: Tutorial,
        linkName: 'Tutorial',
        path: '/tutorial',
    },
    {
        component: Exercise_1,
        linkName: 'Exercise 1',
        path: '/exercise_1',
    },
    {
        component: Exercise_2,
        linkName: 'Exercise 2',
        path: '/exercise_2',
    },
];
