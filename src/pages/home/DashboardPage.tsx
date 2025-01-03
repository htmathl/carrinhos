import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import TypewriterComponent from "typewriter-effect";

import './DashboardPage.css';
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTrigger,
} from "@/components/ui/drawer"

export default function DashboardPage() {

    // states
    const [title, setTitle] = useState('');
    const [card, setCard] = useState(false);
    const [isRecurring, setIsRecurring] = useState(false);

    const time = new Date();
    const hours = time.getHours();

    useEffect(() => {
        if (hours >= 6 && hours < 12) {
            setTitle('Bom dia');
        } else if (hours >= 12 && hours < 18) {
            setTitle('Boa tarde');
        } else if (hours >= 18 && hours < 24) {
            setTitle('Boa noite');
        } else if (hours >= 0 && hours < 6) {
            setTitle('Boa madrugada');
        } else {
            setTitle('Bem vindo');
        }
    }, []);

    const toggleCard = () => {
        setCard(!card);
    }

    const nickname = 'Gui';

    setTimeout(() => {
        document.querySelector('.header-line')?.setAttribute('style', 'width: 100%;');
        document.querySelector('.cursor-die')?.remove();
        
    }, 13000);

    return (
        <div className='bg-zinc-950 container text-white'>
            <header className="p-5 text-3xl font-extralight header">
                <div style={{
                    width: 'fit-content',
                }}>
                    <TypewriterComponent onInit={
                        (typewriter) => {
                            typewriter.typeString(`${title}, `).pauseFor(500).typeString('Gostoso!').pauseFor(800).deleteChars(8).typeString('Cheiroso!').pauseFor(800).deleteChars(9).typeString('Gatinho!').pauseFor(800).deleteChars(8).typeString(`<b style="font-weight: 450; color: #9333ea;">${nickname}!</b>`).start();
                        }
                    } options={{
                        deleteSpeed: 30,
                        cursorClassName: 'Typewriter__cursor cursor-die',
                    }} />
                    <div className="header-line" />
                </div>
            </header>
            {card && (
                <div className="card-container">
                    <div className="card">
                        <div className="card-header">
                            <Button variant="default" className="w-3 bg-transparent border" onClick={toggleCard}><ArrowLeft /></Button>
                            <Input type="text" placeholder="Vai comprar o que?" className="input" />
                        </div>
                        {/* <form className="card-content">
                        <Input type="text" placeholder="Compra" className="input" />
                        <Input type="number" placeholder="Quantidade" className="input" />
                        <Input type="number" placeholder="Preço" className="input" />
                        <Button variant="default">Adicionar</Button>
                    </form> */}
                    </div>
                </div>
            )}

            <Drawer>
                <DrawerTrigger 
                onClick={() => {
                        setIsRecurring(false);
                    }
                }
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 add-button">Nova Lista</DrawerTrigger>
                <DrawerContent id="dwc" className="bg-zinc-950 text-white">
                    <DrawerHeader className="flex items-center justify-center flex-col">
                        <Input type="text" placeholder="Nome da lista" className="list-input" />
                        <div className="flex gap-2 justify-center items-center mt-4">
                            <Checkbox
                                id="recurring"
                                checked={isRecurring}
                                onCheckedChange={(checked) => setIsRecurring(checked === true)}
                                className={`${isRecurring ? '!bg-purple-700 !border-purple-700' : ''} border-white`} />
                            <label htmlFor="recurring">Lista recorrente</label>
                        </div>
                    </DrawerHeader>
                    <DrawerFooter>
                        <Button>Criar</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

            {/* <Button variant="default" className="add-button" onClick={toggleList}>Nova Lista</Button> */}
        </div>
    )
}