import { memo, useContext, useEffect } from 'react';
import { ThemeContext } from '@/contexts/ThemeContext ';

import Avatar from '../../Avatar';
import Button from '../../Button';
import Chip from '../../Chip';
import { LightIcon, MoonIcon, XmarkIcon } from '@/components/Icon';

import { IBook } from '@/types/book';

import './index.css';

interface IPops {
  book: IBook;
  onCloseModal: () => void;
  onCloseByKeyboard: (event: KeyboardEvent) => void;
}

const DetailModal = ({
  book: { name, avatar, author, description, publishers, published },
  onCloseModal,
  onCloseByKeyboard,
}: IPops) => {
  const { toggleTheme, isDarkMode } = useContext(ThemeContext);

  // Close modal by keyboard
  useEffect(() => {
    window.addEventListener('keydown', onCloseByKeyboard);

    // Remove event before closing modal
    return () => window.removeEventListener('keydown', onCloseByKeyboard);
  }, []);

  return (
    <div className="modal-backdrop">
      <div className="detail-modal">
        <div className="modal-header">
          <p className="modal-title">{name}</p>
          <Button
            variant="primary"
            icon={<XmarkIcon />}
            onClick={onCloseModal}
            size="small"
            styles="normal"
          />
        </div>

        <div className="modal-body">
          <div className="modal-image">
            <Avatar url={avatar} alt={name} size="medium" />
          </div>
          <p className="description">{description}</p>
          <div className="book-info">
            <p className="main-info">Author :</p>
            <Chip label={author} adornments={'endAdornments'} />
          </div>
          <div className="book-info">
            <p className="main-info">Published : </p>
            <Chip label={published.toString()} adornments={'endAdornments'} />
          </div>
          <div className="book-info">
            <p className="main-info">Publishers : </p>
            <Chip label={publishers!} adornments={'endAdornments'} />
          </div>
        </div>

        <div className="modal-footer">
          <div className="modal-wrapper">
            <Button variant="secondary" text="esc" size="medium" styles="normal" />
            <p>To Escape</p>
          </div>
          <div className="btn-background">
            <Button
              variant="primary"
              icon={isDarkMode ? <MoonIcon /> : <LightIcon />}
              size="small"
              styles="normal"
              onClick={toggleTheme}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(DetailModal);
