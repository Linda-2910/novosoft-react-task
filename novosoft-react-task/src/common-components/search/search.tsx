import SearchIcon from "../../assets/search.svg";
import { SearchWrapper, Icon, SearchInput } from "./search.styled";
export const SearchBar = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <SearchWrapper>
            <Icon src={SearchIcon} alt="search" />
            <SearchInput {...props} />
        </SearchWrapper>
    );
};
