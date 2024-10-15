import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('f710cb73-f643-462d-808f-7e1a64fa57b5', props.user.username,props.user.secret)
    return <div style={{height:'100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style = {{height:'100%'}}/>
    </div>;
};
export default ChatsPage;