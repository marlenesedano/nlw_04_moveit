import {createContext, useState, ReactNode, useEffect } from 'react';
import challenges from "../../challenges.json";

interface Challenge{
    type : 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData{
    level : number;
    currentExperience: number;
    challengeCompleted: number;
    experienceToNextLevel: number;
    activeChallenge: Challenge;
    levelUp:() => void;
    startNewChallenge: () => void;
    resetChallenge :  () => void;
    completeChallenge : () => void;
}

interface ChallengesProviderProps{
    children:ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}: ChallengesProviderProps){
    const [level, setLevel] = useState(1);
    const [currentExperience, setcurrentExperience] = useState(0);
    const [challengeCompleted, setChallengesCompleted] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1)* 4,2)

    useEffect(() => {
        Notification.requestPermission();
    }, [])

  function levelUp(){
    setLevel (level + 1);  
  }

  function startNewChallenge(){
      const ramdomChallengeIndex = Math.floor(Math.random() * challenges.length)
      const challenge = challenges[ramdomChallengeIndex];
      setActiveChallenge(challenge)

      new Audio('/notification.mp3').play()

      if(Notification.permission === 'granted'){
          new Notification ('Novo desafio' ,{
              body: `Valendo ${challenge.amount} xp!`
          })
      }
  }

  function resetChallenge(){
      setActiveChallenge(null);
  }

  function completeChallenge(){
    if(!activeChallenge){
        return;
    }
    const {amount} = activeChallenge;
    let finalExperience = currentExperience + amount;
    if(finalExperience >= experienceToNextLevel){
        finalExperience = finalExperience - experienceToNextLevel;
        levelUp();
    }
    setcurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengeCompleted + 1);
  }

    return (
        <ChallengesContext.Provider 
        value={{
                level,
                currentExperience,
                challengeCompleted,
                levelUp,
                startNewChallenge,
                activeChallenge,
                resetChallenge,
                experienceToNextLevel,
                completeChallenge,
            }}>
            {children}
        </ChallengesContext.Provider>
    )
}