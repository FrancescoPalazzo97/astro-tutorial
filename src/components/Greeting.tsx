import { useState } from "react";

type GreetingsProps = {
    messages: string[]
}

export function Greeting({ messages }: GreetingsProps) {
    const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

    const [greeting, setGreeting] = useState<string>(messages[0]);

    return (
        <div>
            <h3>{greeting}! Grazie per la visita</h3>
            <button onClick={() => setGreeting(randomMessage())}>
                Nuovo Saluto
            </button>
        </div>
    )
}