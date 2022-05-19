import { useDebugValue, useState } from "react";

export default function useAction(initialState) {
const{setResults, like, thumbsDown, lightBulb} = initialState

  const [currentLike, setCurrentLike] = useState(like || false);
  const [currentThumbsDown, setCurrentThumbsDown] = useState(thumbsDown || false);
  const [currentLightBulb, setCurrentLightBulb] = useState(lightBulb || false);

  function handleLike(id) {
    setCurrentLike(!like);
    setResults(prevResults=> {
      const promptObjIndex = prevResults.findIndex(el=>el.id===id)
      const likedPromptObj = {...prevResults[promptObjIndex], like: !like}
      return [...prevResults.slice(0, promptObjIndex), likedPromptObj, ...prevResults.slice(promptObjIndex + 1)]
    })
  }
  function handleThumbsDown(id) {
    setCurrentThumbsDown(!thumbsDown);
    setResults(prevResults=> {
      const promptObjIndex = prevResults.findIndex(el=>el.id===id)
      const thumbsDownPromptObj = {...prevResults[promptObjIndex], thumbsDown: !thumbsDown}
      return [...prevResults.slice(0, promptObjIndex), thumbsDownPromptObj, ...prevResults.slice(promptObjIndex + 1)]
    })

  }
  function handleLightBulb(id) {
    setCurrentLightBulb(!lightBulb);
    setResults(prevResults=> {
      const promptObjIndex = prevResults.findIndex(el=>el.id===id)
      const lightBulbPromptObj = {...prevResults[promptObjIndex], lightBulb: !lightBulb}
      return [ ...prevResults.slice(0, promptObjIndex), lightBulbPromptObj, ...prevResults.slice(promptObjIndex + 1)]
    })
  }

  useDebugValue("useActions");
  useDebugValue(like ? "liked" : "")

  return {
    currentLike,
    currentThumbsDown,
    currentLightBulb,
    handleLike,
    handleThumbsDown,
    handleLightBulb,
  };
}
