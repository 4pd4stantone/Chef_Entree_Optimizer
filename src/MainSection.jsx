import React from 'react'


export default function MainSection({src}) {

    const [ingredients, setIngredients] = React.useState([])

    function handleAdd(formData) {
      const newIngredient = formData.get("ingredient");
      setIngredients(prev => [...prev, newIngredient])
      console.log(newIngredient)
    }

    const ingredientsList = ingredients.map(i => (
       <li key={i} className='ingredient'>{i}</li>
    ))
    
  return (
    <>
    <main id="main-section">
        <form action={handleAdd} id="main-form">
            <input 
            type='text' 
            aria-label='Add ingredient'
            id="main-input" 
            placeholder="e.g. oregano"
            name="ingredient"
            />
            <button id="add-btn">+ Add ingredient</button>
        </form>
        {ingredients.length > 0 && <section id='ingredientlist-section'>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsList}</ul>
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3> 
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section>}
    </main>
    </>
  )
}