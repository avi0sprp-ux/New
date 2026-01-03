import {useNavigate } from "react-router-dom"
import { BlackButton, GreenButton } from "../uiComponents/Button";
import { pawn } from "../../assets";
import { pawn, Chessboard } from "../../assets";
export default function Hero1(){
    const navigate=useNavigate();
    return <div className="flex rounded-lg">
        <div>
            <img src="https://www.chess.com/bundles/web/images/offline-play/standardboard.1d6f9426.png" 
            <img src={Chessboard} 
            className="h-[500] w-[500px]  rounded" />
        </div>
        <div className="pl-[100px]">
