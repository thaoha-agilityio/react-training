import Avatar from '../../Avatar';
import Button from '../../Button';
import Chip from '../../Chip';
import { SvgLightComponent, SvgXmarkComponent } from '../../Icon';

import { IBook } from '@/types/book';

import './index.css';

interface IPops {
  book: IBook;
}

const DetailModal = ({
  book: { name, avatar, author, description, publisher, published },
}: IPops) => {
  return (
    <div className="modal-backdrop">
      <div className="detail-modal">
        <div className="modal-header">
          <p className="modal-title">{name}</p>
          <Button variant="outlined" icon={<SvgXmarkComponent />} />
        </div>

        <div className="modal-body">
          <div className="modal-image">
            <Avatar url={avatar} alt={name} size="medium" />
          </div>
          <p className="description">{description}</p>
          <div className="details">
            <p>Author :</p>
            <Chip label={author} adornments={'endAdornments'} />
          </div>
          <div className="details">
            <p>Published : </p>
            <Chip label={published} adornments={'endAdornments'} />
          </div>
          <div className="details">
            <p>Publishers:</p>
            <Chip label={publisher!} adornments={'endAdornments'} />
          </div>
        </div>

        <div className="modal-footer">
          <div className="modal-wrapper">
            <Button variant="secondary" text="esc" size="medium" />
            <p>To Escape</p>
          </div>
          <div className="btn-background">
            <Button variant="outlined" icon={<SvgLightComponent />} size="large" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
