import { useContext, useEffect } from 'react';
import { ThemeContext } from '@/contexts/ThemeContext ';

import Avatar from '../../Avatar';
import Button from '../../Button';
import Chip from '../../Chip';
import { SvgLightComponent, SvgXmarkComponent, SvgMoonComponent } from '../../Icon';

import { IBook } from '@/types/book';
import { KEY_NAME_ESC } from '@/constants/message';

import './index.css';

interface IPops {
  book: IBook;
  onCloseModal: () => void;
}

const DetailModal = ({
  book: { name, avatar, author, description, publisher, published },
  onCloseModal,
}: IPops) => {
  const { toggleTheme, isDarkMode } = useContext(ThemeContext);

  // Close modal by keyboard
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.keyCode === KEY_NAME_ESC) {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', close);

    return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <div className="modal-backdrop">
      <div className="detail-modal">
        <div className="modal-header">
          <p className="modal-title">{name}</p>
          <Button variant="primary" icon={<SvgXmarkComponent />} onClick={onCloseModal} />
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
            <Chip label={published} adornments={'endAdornments'} />
          </div>
          <div className="book-info">
            <p className="main-info">Publishers : </p>
            <Chip label={publisher!} adornments={'endAdornments'} />
          </div>
        </div>

        <div className="modal-footer">
          <div className="modal-wrapper">
            <Button variant="secondary" text="esc" size="medium" />
            <p>To Escape</p>
          </div>
          <div className="btn-background">
            <Button
              variant="primary"
              icon={isDarkMode ? <SvgMoonComponent /> : <SvgLightComponent />}
              size="large"
              onClick={toggleTheme}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
