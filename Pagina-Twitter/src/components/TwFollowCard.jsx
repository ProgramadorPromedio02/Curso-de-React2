import { useState } from 'react';

export function TwFollowCard({ userName, children, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  const text = isFollowing ? 'Siguiendo' : 'Seguir';

  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button';

  return (
    <article className="tw-followcard">
      <header className="tw-followcard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="El avatar de Midulev"
        />
        <div className="tw-followCard-info">
          {children}
          <span className="tw-followCard-avatarUsername">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopfollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
