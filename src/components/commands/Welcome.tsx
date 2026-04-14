import {
  Cmd,
  HeroContainer,
  // Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  // Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
    _   ___ __   __    _ __
   / | / (_) /__/ /_  (_) /
  /  |/ / / //_/ __ \/ / / 
 / /|  / / ,< / / / / / /  
/_/ |_/_/_/|_/_/ /_/_/_/   
                            
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
    _   ___ __   __    _ __
   / | / (_) /__/ /_  (_) /
  /  |/ / / //_/ __ \/ / / 
 / /|  / / ,< / / / / / /  
/_/ |_/_/_/|_/_/ /_/_/_/   
 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>systems engineer @ juspay | nixos | rust | payments</div>
        <br />
        <div>
          Type `<Cmd>help</Cmd>` to see available commands.
        </div>
        <div>
          Try `<Cmd>about</Cmd>`, `<Cmd>projects</Cmd>`, or `<Cmd>works</Cmd>`
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
