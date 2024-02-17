import './App.css'
import { RecoilRoot, useRecoilState,useSetRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationsSelector } from './atoms'
import { useMemo } from 'react'

function App() {
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}
function MainApp(){
  const networknotificationAtomCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationsAtomCount = useRecoilValue(notificationsAtom);
  const [messagingAtomCount,setMessagingAtomCount] = useRecoilState(messagingAtom);
  const totalNotifications = useRecoilValue(totalNotificationsSelector);
  //const messagingAtomCount = useRecoilValue(messagingAtom)
  //If we don't need setmesssagingCount value and we need only the setMessagingAtomCount to update, we use useSetRecoilState

  // The below is same as using Selectors in above code
  
  /*const totalnotifcationCount = useMemo(()=>{
    return networknotificationAtomCount+jobsAtomCount+notificationsAtomCount+messagingAtomCount},
    [networknotificationAtomCount,jobsAtomCount,notificationsAtomCount,messagingAtomCount]);
  */

  return (
    <div>
      <button>Home</button>

      <button>My Network ({networknotificationAtomCount>=100?"99+":networknotificationAtomCount})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notification ({notificationsAtomCount})</button>
      <button>Me({totalNotifications})</button>
    </div>
  )
}

export default App

//In another file called atoms.js 

import { atom, selector } from "recoil";

export const networkAtom = atom({
    key : "networkAtom",
    default : 102
});

export const jobsAtom = atom({
    key : "jobsAtom",
    default : 0
});

export const notificationsAtom = atom({
    key : "notificationsAtom",
    default : 12
});

export const messagingAtom = atom({
    key : "messagingAtom",
    default : 0
});

export const totalNotificationsSelector = selector({
    key : "totalNotificationsSelector",
    get : ({get})=>{
        const newtworkCount = get(networkAtom);
        const jobsCount = get(jobsAtom);
        const notificationCount = get(notificationsAtom);
        const messagingCount = get(messagingAtom);
        return newtworkCount+jobsCount+notificationCount+messagingCount;
    }
})
