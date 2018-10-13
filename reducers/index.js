import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK :
      const { deck } = action
      let data = state.decks
      return {
        ...state,
        decks: {
          ...data,
          [deck.title]: deck
        },
      }
    case ADD_CARD :
      const { card, title } = action
      data = state.decks
      return {
        ...state,
        decks: {
          ...data,
          [title]: {
            questions: data[title].questions.concat([card])
          }
          // questions: data.questions.push(card)
        },
      }
    default :
      return state
  }
}

export default decks
