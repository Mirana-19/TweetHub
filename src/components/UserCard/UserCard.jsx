import { useDispatch } from 'react-redux';
import { followUser, unFollowUser } from '../../redux/operations';

const buttonNotFollowing =
  'mt-[26px] w-[196px] px-[28px] py-[14px]  shadow-shadowButton rounded-[10px] text-[#373737] text-[18px] font-sans font-semibold uppercase bg-white hover:bg-secondary bg-whiteText';
const buttonFollowing =
  'mt-[26px] w-[196px] px-[28px] py-[14px]  shadow-shadowButton rounded-[10px] text-[#373737] text-[18px] font-sans font-semibold uppercase bg-secondary hover:bg-white';

export const UserCard = user => {
  const dispatch = useDispatch();
  const { avatar, followers, following, tweets } = user;

  const handleClick = e => {
    following ? dispatch(unFollowUser(user)) : dispatch(followUser(user));
  };

  return (
    <li
      key={user.id}
      className="w-[380px] px-[36px] pb-[36px] pt-[28px] flex flex-col items-center bg-main rounded-[12px] bg-customgradient shadow-shadowCard relative"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="76"
        height="22"
        fill="none"
        className="self-start  absolute top-[20px] left-[20px]"
      >
        <g fill="#fff" fillOpacity=".3" fillRule="evenodd" clipRule="evenodd">
          <path d="M0 0h33.502l8.816 11-8.816 11H0V0Zm15.109 9.878a36.703 36.703 0 0 1-.155-.124c-.13-.104-.258-.207-.39-.305-.357-.271-.747-.487-1.193-.583-.493-.107-.99-.145-1.482.002-.7.21-1.189.668-1.511 1.304-.268.53-.34 1.092-.27 1.676.057.458.205.882.478 1.259.419.578.99.912 1.704 1 .643.08 1.266 0 1.855-.279.2-.095.2-.097.2-.317v-.004l.001-.16a34.206 34.206 0 0 0 0-.377c.001-.044.001-.067-.01-.079-.012-.012-.037-.011-.089-.01H12.29c-.052 0-.078 0-.09-.012-.012-.011-.011-.034-.01-.08v-1.535a898.478 898.478 0 0 0 0-.761c.001-.019.002-.037 0-.056-.003-.043.012-.066.06-.062a.518.518 0 0 0 .056 0h4.751c.031 0 .057.006.053.045-.003.023.012.039.027.055.019.02.038.04.027.074-.009.03-.007.063-.004.095a.6.6 0 0 1 .002.044v.842c0 1.123 0 2.246.002 3.368a.238.238 0 0 1-.099.206 7.099 7.099 0 0 1-2.987 1.476 6.72 6.72 0 0 1-2.009.134c-.8-.063-1.56-.266-2.263-.65-1.289-.707-2.1-1.778-2.474-3.178a5.522 5.522 0 0 1-.162-1.883c.196-2.358 1.87-4.196 4.112-4.708.64-.146 1.287-.168 1.94-.124.499.034.99.111 1.471.252.72.212 1.356.578 1.935 1.047.067.055.134.11.2.167.083.07.085.11.012.197l-1.093 1.3h-.001l-.547.65c-.005.005-.01.011-.014.018a.269.269 0 0 1-.076.076Zm13.065-2.252a5.608 5.608 0 0 0-3.769-1.475c-.626.001-1.094.052-1.59.18-1.44.371-2.567 1.169-3.316 2.442-.769 1.307-.925 2.708-.495 4.15.48 1.611 1.506 2.784 3.091 3.437 1.218.5 2.48.568 3.752.237 1.478-.383 2.61-1.231 3.354-2.554.626-1.116.793-2.312.56-3.56a4.985 4.985 0 0 0-1.587-2.857Zm-4.09 1.207c-.744.017-1.51.436-1.99 1.313-.326.594-.402 1.236-.279 1.898.098.523.328.987.708 1.367.595.593 1.322.826 2.155.731.861-.097 1.502-.533 1.912-1.283.35-.638.422-1.32.259-2.023-.27-1.165-1.256-2.006-2.765-2.003Z" />
          <path d="M42.318 0H76v22H42.318V0Zm11.309 11.274v-5.03c-.002-.047-.002-.07.01-.082.012-.012.035-.011.082-.01a3.983 3.983 0 0 0 .044 0h2.618c.064-.007.084.023.078.082-.001.016 0 .031 0 .047v9.978a1.303 1.303 0 0 0 .001.056c.001.047.002.07-.01.083-.013.012-.04.012-.093.012h-2.582l-.023-.001a.344.344 0 0 0-.048 0c-.067.01-.082-.024-.077-.082v-5.054Zm14.108-5.122H63.51l-4.222-.001h-.095c-.048-.002-.064.02-.06.063v2.439c0 .069-.003.1.012.114.014.014.047.011.117.011h2.654c.087 0 .13 0 .15.021.022.02.022.062.022.143v7.34c0 .069-.005.1.01.114.013.015.045.012.117.012h2.547c.08 0 .12 0 .139-.019.02-.02.02-.057.02-.133v-7.34c0-.075-.005-.109.01-.124.015-.016.05-.013.13-.013h2.703c.116 0 .116 0 .117-.113v-2.37c0-.081.005-.117-.011-.133-.016-.015-.052-.01-.134-.01Z" />
        </g>
      </svg>

      <div className="w-[308px] h-[168px] bg-cover bg-[url('./assets/images/bgPicture.png')]"></div>
      <div className="relative w-[380px] h-[8px] mt-[18px] bg-frame shadow-shadowRectangle">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-frame shadow-shadowEclipse drop-shadow-customDropShadow">
            <img
              className="w-[62px] h-[62px] rounded-full z-40"
              src={avatar}
              alt="user avatar"
            />
          </div>
        </div>
      </div>

      <p className="mt-[62px]  font-medium text-[18px] uppercase text-whiteText">
        {tweets} Tweets
      </p>
      <p className="mt-[16px] font-sans font-medium text-[18px] uppercase text-whiteText">
        {followers.toLocaleString('en-US', { useGrouping: true })} Followers
      </p>
      <button
        type="button"
        onClick={handleClick}
        className={following ? buttonFollowing : buttonNotFollowing}
      >
        {following ? 'Following' : 'Follow'}
      </button>
    </li>
  );
};
