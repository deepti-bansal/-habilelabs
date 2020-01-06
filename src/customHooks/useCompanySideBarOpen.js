import {useSelector} from "react-redux";

export default function useSideBarOpen() {
    let isCompanySideBarOpen = useSelector((state)=>state.isCompanySideBarOpen);
    return isCompanySideBarOpen;
}