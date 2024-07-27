import type { CenterProps } from "@yamada-ui/react"
import {
  Center,
  HStack,
  Link,
  Text,
  VStack,
  forwardRef,
} from "@yamada-ui/react"
import { memo } from "react"
import { Github, X } from "components/media-and-icons"
import { CONSTANT } from "constant"
import { useI18n } from "contexts/i18n-context"

export type FooterProps = CenterProps & {}

export const Footer = memo(
  forwardRef<FooterProps, "div">(({ ...rest }, ref) => {
    const { tc } = useI18n()

    return (
      <Center
        ref={ref}
        as="footer"
        position="sticky"
        top="100vh"
        w="full"
        {...rest}
      >
        <VStack
          alignItems="center"
          w="full"
          maxW="9xl"
          py="xl"
          px={{ base: "lg", md: "md" }}
        >
          <Text
            color={["blackAlpha.600", "whiteAlpha.600"]}
            fontSize={{ base: "md", sm: "sm" }}
            textAlign="center"
          >
            {tc("component.footer.description", (str, index) => (
              <Link
                href={
                  index === 1
                    ? CONSTANT.SNS.GITHUB.ARNAV_SINGHA
                    : CONSTANT.SNS.GITHUB.ARNAV_SINGHA + "/graphs/contributors"
                }
                target="_blank"
              >
                {str}
              </Link>
            ))}
          </Text>

          <HStack>
            <Link
              color="muted"
              href={CONSTANT.SNS.GITHUB.ARNAV_SINGHA}
              target="_blank"
              aria-label="GitHub profile of Arnav Singha"
            >
              <Github />
            </Link>

            {/* <Link
              color="muted"
              href={CONSTANT.SNS.TWITTER.ARNAV_SINGHA}
              target="_blank"
              aria-label="X Arnav Singha"
            >
              <X />
            </Link> */}
          </HStack>
        </VStack>
      </Center>
    )
  }),
)
