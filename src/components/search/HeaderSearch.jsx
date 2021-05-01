import _ from 'lodash'
import React, { useCallback, useEffect, useReducer, useRef, useState } from 'react'
import { Search } from 'semantic-ui-react'
import { getPublications } from '../../api/publications'
import './custom.scss';


const initialState = {
    loading: false,
    results: [],
    value: '',
}

function exampleReducer(state, action) {
    switch (action.type) {
        case 'CLEAN_QUERY':
            return initialState
        case 'START_SEARCH':
            return { ...state, loading: true, value: action.query }
        case 'FINISH_SEARCH':
            return { ...state, loading: false, results: action.results }
        case 'UPDATE_SELECTION':
            return { ...state, value: action.selection }

        default:
            throw new Error()
    }
}

function HeaderSearch() {
    const [state, dispatch] = useReducer(exampleReducer, initialState)
    const [publications, setPublications] = useState([]);
    const { loading, results, value } = state

    const timeoutRef = useRef()
    const handleSearchChange = useCallback((e, data) => {
        clearTimeout(timeoutRef.current)
        dispatch({ type: 'START_SEARCH', query: data.value })

        timeoutRef.current = setTimeout(() => {
            if (data.value.length === 0) {
                dispatch({ type: 'CLEAN_QUERY' })
                return
            }

            const re = new RegExp(_.escapeRegExp(data.value), 'i')
            const isMatch = (result) => re.test(result.title);

            dispatch({
                type: 'FINISH_SEARCH',
                results: _.filter(publications, isMatch),
            })
        }, 300)
    }, [publications])

    useEffect(async () => {
        const res = await getPublications();
        const options = res.data.map((pub) => ({
            id: pub.id,
            title: pub.name,
            description: pub.year,
            image: pub.picture,
            price: pub.price
        }));
        setPublications(options)
    }, [])


    useEffect(() => {
        return () => {
            clearTimeout(timeoutRef.current)
        }
    }, [])

    useEffect(() => {
        console.log(publications)
        const res = publications.find((pub) => pub.title === state.value);

        if(res) {
            window.location.replace(`/publication/${res.id}/`);
        }

    }, [state.value])



    return (
        <Search
            loading={loading}
            onResultSelect={(e, data) =>
                dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
            }
            onSearchChange={handleSearchChange}
            results={results}
            value={value}
        />
    )
}
export default HeaderSearch;