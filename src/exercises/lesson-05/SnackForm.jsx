import styles from './SnackForm.module.css';
import { useState, useEffect } from 'react';

export default function SnackForm({
  addSnack,
  editingSnack,
  cancelEdit,
  updateSnack,
  className,
}) {
  const isEditing = Boolean(editingSnack);

  // Step 1: Create state variables
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [touched, setTouched] = useState({
    name: false,
    rating: false,
  });

  // Step 2: Populate or reset form when editingSnack changes
  useEffect(() => {
    if (editingSnack) {
      setName(editingSnack.name || '');
      setRating(editingSnack.rating?.toString() || '');
    } else {
      setName('');
      setRating('');
    }

    // Reset touched state when switching modes
    setTouched({
      name: false,
      rating: false,
    });
  }, [editingSnack]);

  // Step 3: Validation functions
  function validateName() {
    return name.trim() !== '';
  }

  function validateRating() {
    return rating !== '';
  }

  function getNameError() {
    if (touched.name && !validateName()) {
      return 'Snack name is required';
    }
    return '';
  }

  function getRatingError() {
    if (touched.rating && !validateRating()) {
      return 'Please select a rating';
    }
    return '';
  }

  // Step 4: Handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    // Check validation before submission
    if (!validateName() || !validateRating()) {
      setTouched({
        name: true,
        rating: true,
      });
      return;
    }

    if (isEditing) {
      updateSnack(editingSnack.id, name.trim(), rating);
    } else {
      addSnack(name.trim(), rating);

      // Reset state after adding snack
      setName('');
      setRating('');
      setTouched({
        name: false,
        rating: false,
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${className || ''}`}
    >
      <h3 className={styles['form-title']}>
        {isEditing ? '✏️ Edit Snack' : '➕ Add Snack'}
      </h3>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Name:</label>

        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setTouched((prev) => ({ ...prev, name: true }))}
        />

        {getNameError() && <div className={styles.error}>{getNameError()}</div>}
      </div>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Rating:</label>

        <input
          type="number"
          name="rating"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          onFocus={() => setTouched((prev) => ({ ...prev, rating: true }))}
        />

        {getRatingError() && (
          <div className={styles.error}>{getRatingError()}</div>
        )}
      </div>

      <div className={styles['button-container']}>
        <button
          type="submit"
          className={`${styles.button} ${styles['submit-button']}`}
        >
          {isEditing ? 'Save' : 'Add'}
        </button>

        {isEditing && (
          <button
            type="button"
            onClick={cancelEdit}
            className={`${styles.button} ${styles['cancel-button']}`}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
