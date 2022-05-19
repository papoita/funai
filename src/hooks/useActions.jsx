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
      return [likedPromptObj, ...prevResults.slice(0, promptObjIndex), ...prevResults.slice(promptObjIndex + 1)]
    })
  }
  function handleThumbsDown(id) {
    setCurrentThumbsDown(!thumbsDown);
    setResults(prevResults=> {
      const promptObjIndex = prevResults.findIndex(el=>el.id===id)
      const thumbsDownPromptObj = {...prevResults[promptObjIndex], thumbsDown: !thumbsDown}
      return [thumbsDownPromptObj, ...prevResults.slice(0, promptObjIndex), ...prevResults.slice(promptObjIndex + 1)]
    })

  }
  function handleLightBulb() {
    setCurrentLightBulb(!lightBulb);
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
