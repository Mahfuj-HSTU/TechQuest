import { createSlice } from "@reduxjs/toolkit"
import axios from 'axios'
import { toast } from "react-hot-toast"
import { ServerLink } from "../../Hooks/useServerLink"

const initialApply = {
    apply: [
        {
            id: 1,
            email: "test.applied@techquest.com",
        }
    ]
}

export const ApplyJobSlice = createSlice({
    name: "apply",
    initialState: initialApply,
    reducers: {
        showApply: state => state,
        addApply: (state, action) => {
            // console.log(action.payload);
            // state.apply.push(action.payload);

            axios.post(`${ServerLink}/applications`, action.payload)
                .then(data => {
                    console.log(data)
                    if(data.status === 200){
                        toast.success('Application submitted')
                    }
                })
                .catch(e => console.error('application store error => ', e))
        }
    }
})

export const { showApply, addApply } = ApplyJobSlice.actions;

export default ApplyJobSlice.reducer;