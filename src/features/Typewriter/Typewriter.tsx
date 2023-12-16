import { FC } from 'react';
import Typewriter from 'typewriter-effect';

interface TypewriterProps {}

export const TypewriterComponent: FC<TypewriterProps> = () => {
    return (
        <div>
            <Typewriter
                options={{
                    loop: true,
                }}
                onInit={typewriter => {
                    typewriter
                        .typeString('Supercharged productivity')
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString('AI Powered Insights')
                        .start();
                }}
            />
        </div>
    );
};
