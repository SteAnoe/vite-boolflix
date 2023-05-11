import {reactive} from "vue";

export const store = reactive(
    {
        filmList: [],
        tvList: [],
        searchQuery: '',
        displayOverview: false,
        displayCounter: 0
    }
)