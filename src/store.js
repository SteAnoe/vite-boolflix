import {reactive} from "vue";

export const store = reactive(
    {
        onlyFilmList: [],
        genresFilmsList: [],

        onlyTvList: [],
        genresTvList: [],

        filmQuery: '',

        currentCard: undefined,
        currentCast: [],
        currentGenre: 'undefined',
    }
)