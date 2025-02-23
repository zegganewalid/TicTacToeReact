import React, { useRef, useState, useEffect } from "react";
import "./TicTacToe.css";
import circle_icon from "../Assets/circle.png";
import cross_icon from "../Assets/cross.png";
import gameMusic from "../Assets/game-music.mp3";

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const [scoreX, setScoreX] = useState(0);
    const [scoreO, setScoreO] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [winningLine, setWinningLine] = useState(null);

    const audioRef = useRef(new Audio(gameMusic));
    const titleRef = useRef(null);
    const box1 = useRef(null);
    const box2 = useRef(null);
    const box3 = useRef(null);
    const box4 = useRef(null);
    const box5 = useRef(null);
    const box6 = useRef(null);
    const box7 = useRef(null);
    const box8 = useRef(null);
    const box9 = useRef(null);

    const boxArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

    useEffect(() => {
        audioRef.current.loop = true;
    }, []);

    useEffect(() => {
        if (showConfetti) {
            const timer = setTimeout(() => {
                setShowConfetti(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showConfetti]);

    const toggleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const toggle = (e, num) => {
        if (lock || data[num] !== "") {
            return;
        }
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src=${cross_icon} class="move-animation" />`;
            data[num] = "X";
            setCount(count + 1);
        } else {
            e.target.innerHTML = `<img src=${circle_icon} class="move-animation" />`;
            data[num] = "O";
            setCount(count + 1);
        }
        checkWin();
    }

    const checkWin = () => {
        const winningCombos = [
            [0, 1, 2, 'horizontal-1'],
            [3, 4, 5, 'horizontal-2'],
            [6, 7, 8, 'horizontal-3'],
            [0, 3, 6, 'vertical-1'],
            [1, 4, 7, 'vertical-2'],
            [2, 5, 8, 'vertical-3'],
            [0, 4, 8, 'diagonal-1'],
            [2, 4, 6, 'diagonal-2']
        ];

        for (let [a, b, c, lineClass] of winningCombos) {
            if (data[a] && data[a] === data[b] && data[a] === data[c]) {
                setWinningLine(lineClass);
                won(data[a]);
                return;
            }
        }


        if (!data.includes("") && !lock) {
            titleRef.current.innerHTML = "Match Nul!";
            setLock(true);
        }
    }

    const won = (winner) => {
        setLock(true);
        setShowConfetti(true);
        if (winner === "X") {
            titleRef.current.innerHTML = `Victoire! <img src=${cross_icon} class="winner-animation" />`;
            setScoreX(scoreX + 1);
        } else {
            titleRef.current.innerHTML = `Victoire! <img src=${circle_icon} class="winner-animation" />`;
            setScoreO(scoreO + 1);
        }
    }

    const reset = () => {
        setLock(false);
        setShowConfetti(false);
        setWinningLine(null);
        data = ["", "", "", "", "", "", "", "", ""];
        titleRef.current.innerHTML = `Tic Tac Toe Game`;
        boxArray.forEach((box) => {
            box.current.innerHTML = "";
        });
        setCount(0);
    }

    const createConfetti = () => {
        return (
            <div className="confetti-container">
                {[...Array(100)].map((_, i) => (
                    <div 
                        key={i} 
                        className="confetti"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            backgroundColor: `hsl(${Math.random() * 360}, 70%, 50%)`,
                            width: `${Math.random() * 8 + 4}px`,
                            height: `${Math.random() * 8 + 4}px`,
                            borderRadius: Math.random() > 0.5 ? '50%' : '0'
                        }}
                    />
                ))}
            </div>
        );
    };

    return (
        <div className="container">
            {showConfetti && createConfetti()} {}
            <h1 className="title" ref={titleRef}>
                Tic Tac Toe Game
            </h1>
            <div className="score-board">
                <div className="score">
                    <img src={cross_icon} alt="X" className="score-icon" />
                    <span className="score-value">{scoreX}</span>
                </div>
                <div className="score">
                    <img src={circle_icon} alt="O" className="score-icon" />
                    <span className="score-value">{scoreO}</span>
                </div>
            </div>
            <div className="board">
                {winningLine && <div className={`winning-line ${winningLine}`}></div>}
                <div className="row1">
                    <div className="boxes" ref={box1} onClick={(e) => { toggle(e, 0) }}></div>
                    <div className="boxes" ref={box2} onClick={(e) => { toggle(e, 1) }}></div>
                    <div className="boxes" ref={box3} onClick={(e) => { toggle(e, 2) }}></div>
                </div>
                <div className="row2">
                    <div className="boxes" ref={box4} onClick={(e) => { toggle(e, 3) }}></div>
                    <div className="boxes" ref={box5} onClick={(e) => { toggle(e, 4) }}></div>
                    <div className="boxes" ref={box6} onClick={(e) => { toggle(e, 5) }}></div>
                </div>
                <div className="row3">
                    <div className="boxes" ref={box7} onClick={(e) => { toggle(e, 6) }}></div>
                    <div className="boxes" ref={box8} onClick={(e) => { toggle(e, 7) }}></div>
                    <div className="boxes" ref={box9} onClick={(e) => { toggle(e, 8) }}></div>
                </div>
            </div>
            <div className="buttons">
                <button className="reset" onClick={reset}>Reset</button>
                <button className="music-toggle" onClick={toggleMusic}>
                    {isPlaying ? "🔇 Mute" : "🔊 Play Music"}
                </button>
            </div>
        </div>
    );
};

export default TicTacToe;